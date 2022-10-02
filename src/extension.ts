import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-juve.fixturesResults', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://www.juventus.com/en/teams/first-team-men/fixtures-results/'));

    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
