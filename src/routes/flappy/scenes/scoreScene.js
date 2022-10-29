import BaseScene from "./baseScene.js";

class ScoreScene extends BaseScene {

    constructor(config) {
        super('ScoreScene', {...config, canGoBack: true});

        this.menu = [
            {scene: 'PlayScene', text: 'Play'},
            {scene: 'ScoreScene', text: 'Score'},
            {scene: null, text: 'Exit'}

        ]
    }

    preload() {

    }

    create() {
        super.create();

        const bestScore = localStorage.getItem('bestScore');
        this.add.text(...this.screenCenter, `Best Score: ${bestScore || 0}`, this.fontOptions)
            .setOrigin(0.5, 0)
    }




}

export default ScoreScene;
