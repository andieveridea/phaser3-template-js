class bootGame extends Phaser.Scene {
    constructor() {
        super("BootGame");
    }
    preload() {

        //example calling image
        //this.load.image("key", "image_source_path");

        //example calling audio
        //this.load.audio("key", "audio_clip_source_path")

        //example calling sprite sheet
        // this.load.spritesheet("key", "sprite_sheet_soruce_path", {
        //     frameWidth: each_sprite_width,
        //     frameHeight: each_sprite_height
        // });
    }

    create() {

        var centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        var centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        //load specific next scene
        //this.scene.start("MainMenu");
    }
}