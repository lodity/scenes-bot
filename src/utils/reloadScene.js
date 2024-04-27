export default function reloadScene(ctx, sceneName) {
    ctx.scene.leave();
    ctx.scene.enter(sceneName);
}
