const config = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        
        '@semantic-release/release-notes-generator',

        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md'
            }
        ],
        
        ["@semantic-release/git", {
            "assets": ["dist/**", "CHANGELOG.md"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        
        '@semantic-release/github',

        [
            "@semantic-release/exec",
            {
                "prepareCmd": "echo APP_VERSION_NUMBER=${nextRelease.version} > .env"
            }
        ]
    ]
};

export default config;