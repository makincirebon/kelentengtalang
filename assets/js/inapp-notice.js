<!-- In-App Browser Detection Notice -->
<script>
document.addEventListener("DOMContentLoaded", function () {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    const inApp =
        ua.includes("FBAN") || ua.includes("FBAV") ||        // Facebook
        ua.includes("Instagram") ||
        ua.includes("Line") ||
        ua.includes("WhatsApp") ||
        ua.includes("TikTok") ||
        ua.includes("Twitter") ||
        ua.includes("Snapchat");

    if (!inApp) return;

    const popup = document.createElement("div");
    popup.innerHTML = `
        <div id="open-browser-popup" style="
            position: fixed; bottom: 0; left: 0; right: 0;
            background: #ffffff; padding: 18px; box-shadow: 0 0 10px rgba(0,0,0,.35);
            font-family: sans-serif; text-align: center; z-index: 99999;">
            <p style="margin:0 0 10px; font-size:15px;">
                ⚠️ Halaman ini dibuka dari browser dalam aplikasi.<br>
                Untuk pengalaman terbaik, buka di browser utama Anda.
            </p>
            <button id="copyUrlBtn" style="
                background:#007bff; color:white; border:none;
                padding:10px 18px; border-radius:6px; font-size:15px;">
                Salin URL & Buka di Browser
            </button>
        </div>
    `;
    document.body.appendChild(popup);

    document.getElementById("copyUrlBtn").addEventListener("click", function () {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert("URL disalin.\nSilakan tempelkan di Chrome, Safari, atau browser pilihan Anda.");
        });
    });
});
</script>
