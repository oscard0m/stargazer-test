/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log("Yay! The app was loaded!");

  app.on("issues.opened", async (context) => {
    const USER = await context.octokit.users.getByUsername({
      username: context.payload.sender.login,
    });

    app.log(USER);

    return context.octokit.issues.createComment(
      context.issue({ body: `Hello, ${USER}!` })
    );
  });
};
