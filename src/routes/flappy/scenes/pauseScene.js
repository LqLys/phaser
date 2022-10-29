import BaseScene from "./baseScene.js";

class PauseScene extends BaseScene {

    constructor(config) {
        super('PauseScene', config);

        this.menu = [
            {scene: 'PlayScene', text: 'Continue'},
            {scene: 'MenuScene', text: 'Exit'}
        ]
    }

    preload() {

    }

    create() {
        super.create();
        this.createMenu(this.menu, (menuItem) =>this.setupMenuEvents(menuItem));
    }

    setupMenuEvents(menuItem) {
        const textGameObject = menuItem.textGameObject;
        textGameObject.setInteractive();

        textGameObject.on('pointerover', () => {
            textGameObject.setStyle({fill: '#ff0'})
        })

        textGameObject.on('pointerout', () => {
            textGameObject.setStyle({fill: '#fff'})
        })

        textGameObject.on('pointerup', () => {
            if(menuItem.scene && menuItem.text === 'Continue') {
                // Shutting down the Pause Scene and resuming the Play Scene
                this.scene.stop();
                this.scene.resume(menuItem.scene)
            }

            if(menuItem.scene && menuItem.text === 'Exit'){
                // Shutting PlayScene, PauseScene and running Menu
                this.scene.stop('PlayScene');
                this.scene.start(menuItem.scene);
            }

        })

    }


}

export default PauseScene;
