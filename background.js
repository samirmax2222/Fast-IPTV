
function newOptionsPage() {
    chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
}

function activeOptionsPage() {
    const extensionId = chrome.runtime.id;

    // make options tab active
    chrome.tabs.query({}, (tabs) => {
        const optionsTab = tabs.find(tab => tab.url && tab.url.includes(extensionId + '/index.html'));
        if (optionsTab) {
            // not working
            // chrome.tabs.reload(optionsTab.id);
            chrome.tabs.update(optionsTab.id, { active: true });
        }
    });
}

function addSamplePlaylist() {
    const apiUrl = 'https://itoolkit.app/api/v1/extension/config?id=fastiptv&name=fastiptv';
    fetch(apiUrl).then(response => {
        if (response.status === 200) {
            return response.json();
        }

        throw new Error(response.status);
    }).then(resp => {
        const { sampleParseUrl } = resp.data;
        if (!sampleParseUrl) {
            return;
        }

        fetch(sampleParseUrl).then(response => {
            if (response.status === 200) {
                return response.json();
            }

            throw new Error(response.status);
        }).then(data => {
            indexedDB.open('iptvnator', 1).onsuccess = (event) => {
                const db = event.target.result;
                const tx = db.transaction('playlists', 'readwrite');
                const store = tx.objectStore('playlists');
                const urlIndex = store.index('url');
                urlIndex.get(data.url).onsuccess = (event) => {
                    if (!event.target.result) {
                        store.add(data);

                        // setTimeout(() => {
                        //     newOptionsPage();
                        // }, 1000);
                    }
                }
            };
        });
    });
}

// open options page on action icon click
chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage(() => {
        activeOptionsPage();
    });
});

// on installed or updated
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        // chrome.tabs.create({ url: 'options.html' });
        // chrome.storage.sync.set({ updated: 1});
        
        chrome.runtime.openOptionsPage();

        setTimeout(() => {
            // addSamplePlaylist();

            chrome.runtime.sendMessage({ type: 'install' });
        }, 3000);
    }
})