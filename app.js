document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const messageList = document.getElementById('messageList');

    // Generate dummy data
    const dummyData = [
        { name: "Sarah Parker", message: "Hello! Just found this BBS, so excited to be here!", timestamp: "2025-05-26 10:00" },
        { name: "Thomas Wilson", message: "What a beautiful day! Just came back from a morning walk.", timestamp: "2025-05-26 09:45" },
        { name: "Ken Mitchell", message: "Tried a new recipe today. It turned out amazing!", timestamp: "2025-05-26 09:30" },
        { name: "Michelle Lee", message: "Saw a great movie this weekend. Highly recommend it.", timestamp: "2025-05-26 09:15" },
        { name: "James Cooper", message: "Started jogging recently. It's becoming a good habit.", timestamp: "2025-05-26 09:00" },
        { name: "Hannah Brown", message: "Started reading a new book. It's such a page-turner!", timestamp: "2025-05-26 08:45" },
        { name: "Oliver Chen", message: "Looking forward to this weekend's event!", timestamp: "2025-05-26 08:30" },
        { name: "David Thompson", message: "The flowers in my garden are blooming. Spring is here!", timestamp: "2025-05-26 08:15" },
        { name: "Emma Davis", message: "Found a lovely new café. Great atmosphere and coffee!", timestamp: "2025-05-26 08:00" },
        { name: "Michael Kim", message: "Just started learning programming. So excited about it!", timestamp: "2025-05-26 07:45" },
        { name: "Julia Roberts", message: "Morning yoga has been transforming my daily routine.", timestamp: "2025-05-26 07:30" },
        { name: "Daniel Taylor", message: "Picked up photography as a new hobby. Loving it!", timestamp: "2025-05-26 07:15" },
        { name: "Sophie Martin", message: "Been baking bread lately. What should I try next?", timestamp: "2025-05-26 07:00" },
        { name: "Kevin Anderson", message: "Visited my hometown after ages. So many memories!", timestamp: "2025-05-26 06:45" },
        { name: "Emily White", message: "Just got a new puppy! She's absolutely adorable!", timestamp: "2025-05-26 06:30" },
        { name: "Richard Clark", message: "Remote work is really changing how I structure my day.", timestamp: "2025-05-26 06:15" },
        { name: "Alice Green", message: "Started gardening. It's so therapeutic!", timestamp: "2025-05-26 06:00" },
        { name: "Ryan Phillips", message: "Having a virtual party with friends tonight. Can't wait!", timestamp: "2025-05-26 05:45" },
        { name: "Victoria Hughes", message: "Working on a new certification. Wish me luck!", timestamp: "2025-05-26 05:30" },
        { name: "Peter Shaw", message: "Discovered some great new music. You should check it out!", timestamp: "2025-05-26 05:15" }
    ];

    // メッセージカードの生成関数
    function createMessageCard(data) {
        const card = document.createElement('div');
        card.className = 'message-card';
        card.innerHTML = `
            <div class="message-header">
                <span class="message-author">${escapeHTML(data.name)}</span>
                <span class="message-date">${data.timestamp}</span>
            </div>
            <div class="message-content">${escapeHTML(data.message)}</div>
        `;
        return card;
    }

    // HTML特殊文字のエスケープ
    function escapeHTML(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // ダミーデータの表示
    dummyData.forEach(data => {
        messageList.prepend(createMessageCard(data));
    });

    // フォーム送信処理
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        if (name.trim() && message.trim()) {
            const now = new Date();
            const timestamp = now.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            });

            const newMessage = {
                name: name,
                message: message,
                timestamp: timestamp
            };

            messageList.prepend(createMessageCard(newMessage));
            messageForm.reset();
        }
    });
});
