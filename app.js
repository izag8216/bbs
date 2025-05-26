document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const messageList = document.getElementById('messageList');

    // Generate dummy data
    const dummyData = [
        { name: "Sarah Parker", message: "Hello! So happy to find this BBS.", timestamp: "2025-05-26 10:00" },
        { name: "Thomas Wilson", message: "Beautiful weather today! Went for a nice walk.", timestamp: "2025-05-26 09:45" },
        { name: "Ken Mitchell", message: "Tried a new recipe today. Turned out great!", timestamp: "2025-05-26 09:30" },
        { name: "Michelle Lee", message: "Watched an amazing movie this weekend. Highly recommend!", timestamp: "2025-05-26 09:15" },
        { name: "James Cooper", message: "Started jogging recently. Becoming a good habit.", timestamp: "2025-05-26 09:00" },
        { name: "Hannah Brown", message: "Started reading a new book. It's fascinating!", timestamp: "2025-05-26 08:45" },
        { name: "Oliver Chen", message: "Looking forward to this weekend's event!", timestamp: "2025-05-26 08:30" },
        { name: "David Thompson", message: "The flowers in my garden are blooming beautifully. Spring is here!", timestamp: "2025-05-26 08:15" },
        { name: "Emma Davis", message: "Found a great new café. Love the atmosphere!", timestamp: "2025-05-26 08:00" },
        { name: "Michael Kim", message: "Started learning programming. Excited about it!", timestamp: "2025-05-26 07:45" },
        { name: "Julia Roberts", message: "Morning yoga has been making my days so much better.", timestamp: "2025-05-26 07:30" },
        { name: "Daniel Taylor", message: "Picked up photography as a new hobby.", timestamp: "2025-05-26 07:15" },
        { name: "Sophie Martin", message: "Got into baking bread. What should I make next?", timestamp: "2025-05-26 07:00" },
        { name: "Kevin Anderson", message: "Visited my hometown after a long time. Nostalgic!", timestamp: "2025-05-26 06:45" },
        { name: "Emily White", message: "Just got a new pet! So adorable!", timestamp: "2025-05-26 06:30" },
        { name: "Richard Clark", message: "Remote work is changing my daily routine.", timestamp: "2025-05-26 06:15" },
        { name: "Alice Green", message: "Started gardening. It's so therapeutic!", timestamp: "2025-05-26 06:00" },
        { name: "Ryan Phillips", message: "Having an online party with friends tonight. Can't wait!", timestamp: "2025-05-26 05:45" },
        { name: "Victoria Hughes", message: "Started studying for a new certification. Wish me luck!", timestamp: "2025-05-26 05:30" },
        { name: "Peter Shaw", message: "Found some great new music. You should check it out!", timestamp: "2025-05-26 05:15" }
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
            const timestamp = now.toLocaleString('ja-JP', {
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
