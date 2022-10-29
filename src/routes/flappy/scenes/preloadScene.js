import * as Phaser from 'phaser'

class PreloadScene extends Phaser.Scene {

    constructor(config) {
        super('PreloadScene');
        this.config = config
    }

    preload(){
        this.load.image('sky', 'assets/flappy/sky.png')
        this.load.spritesheet('bird', 'assets/flappy/birdSprite.png', {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.image('pipe', 'assets/flappy/pipe.png')
        this.load.image('pause', 'assets/flappy/pause.png')
        this.load.image('back', 'assets/flappy/back.png')

    }

    create(){
        this.scene.start('MenuScene')
    }


}

export default PreloadScene;
