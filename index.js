/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: "Thanks for opening this issue!" })
    );
  });

  app.on("issue_comment.created", async (context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: "Thanks for commenting on this issue!" })
    );
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
