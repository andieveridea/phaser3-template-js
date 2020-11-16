var game;

window.onload = function() {
    var gameConfig = {
        width: 580,
        height: 960,
        scene: [bootGame],
        physics: {
            default: 'arcade',
            arcade: { debug: true }
        }
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
}