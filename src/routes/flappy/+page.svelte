<script>
    import Phaser from "phaser";
    import PlayScene from '../flappy/scenes/playScene'
    import MenuScene from "./scenes/menuScene.js";
    import PreloadScene from "./scenes/preloadScene.js";
    import ScoreScene from "./scenes/scoreScene.js";
    import PauseScene from "./scenes/pauseScene.js";
    import {onMount} from "svelte";


    const WIDTH = 400;
    const HEIGHT = 600;
    const BIRD_POSITION = {x: WIDTH/10, y: HEIGHT / 2};
    const SHARED_CONFIG = {
        width: WIDTH,
        height: HEIGHT,
        startPosition: BIRD_POSITION
    }

    const Scenes = [PreloadScene, MenuScene, ScoreScene, PlayScene, PauseScene];
    const createScene = Scene => new Scene(SHARED_CONFIG)
    const initScenes = () => Scenes.map(createScene)

    function setUpGame() {
        const config = {
            type: Phaser.AUTO,
            ...SHARED_CONFIG,
            pixelArt: true,
            parent: 'flappy',
            physics: {
                default: 'arcade',
                arcade: {
                    // debug: true,
                    gravity: {
                        // y: 400
                    }
                }
            },
            scene: initScenes()
        }

        new Phaser.Game(config)

    }

    onMount(async () => {
        setUpGame()
    })




</script>


<div style="width: 800px; height: 600px;" id="flappy">

</div>