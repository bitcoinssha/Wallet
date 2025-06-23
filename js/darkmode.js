async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('walletAddress').textContent = 'Wallet: ' + accounts[0];
        } catch (e) {
            alert('Conexión rechazada.');
        }
    } else {
        alert('MetaMask no está disponible.');
    }
}
