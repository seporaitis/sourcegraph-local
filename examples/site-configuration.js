{
    // The externally accessible URL for Sourcegraph (i.e., what you type into your browser)
	// This is required to be configured for Sourcegraph to work correctly.
	"externalURL": "https://sourcegraph.local:7443",
  
    // This ensures that you are the only admin and no-one else can signup and browse the indexed code.
	"auth.providers": [
		{
			"type": "builtin",
			"allowSignup": false
		}
	],

	"disablePublicRepoRedirects": true,
	"search.index.enabled": true,
}