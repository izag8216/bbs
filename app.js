document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const messageList = document.getElementById('messageList');

    // ダミーデータの生成
    const dummyData = [
        { name: "田中さくら", message: "はじめまして！このBBSを見つけてうれしいです。", timestamp: "2025-05-26 10:00" },
        { name: "山田太郎", message: "今日は素晴らしい天気ですね。散歩に行ってきました。", timestamp: "2025-05-26 09:45" },
        { name: "鈴木健一", message: "新しい料理のレシピを試してみました。とても美味しくできました！", timestamp: "2025-05-26 09:30" },
        { name: "佐藤美咲", message: "週末に観た映画がとても良かったです。おすすめです。", timestamp: "2025-05-26 09:15" },
        { name: "高橋翔太", message: "最近始めたジョギング、良い習慣になってきました。", timestamp: "2025-05-26 09:00" },
        { name: "伊藤花子", message: "新しい本を読み始めました。面白いのでおすすめです！", timestamp: "2025-05-26 08:45" },
        { name: "渡辺優", message: "今週末のイベント、楽しみにしています。", timestamp: "2025-05-26 08:30" },
        { name: "小林大輔", message: "庭の花が綺麗に咲きました。春が来ましたね。", timestamp: "2025-05-26 08:15" },
        { name: "中村愛", message: "新しいカフェを見つけました。居心地が良くておすすめです。", timestamp: "2025-05-26 08:00" },
        { name: "加藤正樹", message: "プログラミングの勉強を始めました。頑張ります！", timestamp: "2025-05-26 07:45" },
        { name: "吉田純子", message: "朝ヨガを始めてから、一日が充実しています。", timestamp: "2025-05-26 07:30" },
        { name: "木村達也", message: "新しい趣味として写真撮影を始めました。", timestamp: "2025-05-26 07:15" },
        { name: "松本さやか", message: "手作りパンにハマっています。次は何を作ろうかな。", timestamp: "2025-05-26 07:00" },
        { name: "斎藤健", message: "久しぶりに実家に帰りました。懐かしい場所です。", timestamp: "2025-05-26 06:45" },
        { name: "山本美優", message: "新しいペットを迎えました。とても可愛いです！", timestamp: "2025-05-26 06:30" },
        { name: "井上拓真", message: "テレワークが定着してきて、生活リズムが変わりました。", timestamp: "2025-05-26 06:15" },
        { name: "林明子", message: "ガーデニングを始めました。癒されます。", timestamp: "2025-05-26 06:00" },
        { name: "岡田隆", message: "今日は友人とオンライン飲み会です。楽しみ！", timestamp: "2025-05-26 05:45" },
        { name: "森田優子", message: "新しい資格の勉強を始めました。頑張ります。", timestamp: "2025-05-26 05:30" },
        { name: "清水翔太", message: "最近のお気に入りの音楽を見つけました。おすすめです！", timestamp: "2025-05-26 05:15" }
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
