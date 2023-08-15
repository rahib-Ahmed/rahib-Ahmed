document.addEventListener('DOMContentLoaded', () => {
    // GET THE REFERENCES
    const container1 = document.querySelector('.skill1-container');
    const container2 = document.querySelector('.skill2-container');
    const container3 = document.querySelector('.skill3-container');
    const container4 = document.querySelector('.skill4-container');

    // Function to load requested partial
    const loadContent = async (data, s) => {
        try {
            const response = await fetch(data.pageUrl);
            if (response.ok) {
                const content = await response.text();
                data.container.innerHTML = content;
            } else {
                console.error('Error loading content:', response.status);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const pagesUrl = [
        {
            pageUrl: './pages/skillSet1.html',
            container: container1
        },
        {
            pageUrl: './pages/skillSet2.html',
            container: container2
        },
        {
            pageUrl: './pages/skillSet3.html',
            container: container3
        },
        {
            pageUrl: './pages/skillSet4.html',
            container: container4
        },
    ];

    // Initial content load
    for (let i = 0; i < pagesUrl.length; i++) {
        loadContent(pagesUrl[i]);
    }
});
