/// <references types="houdini-svelte">
/// <references types="houdini-plugin-svelte-global-stores">

const defaultMarshall = {
	unmarshal(val) {
		return val;
	},
	marshal(val) {
		return val;
	}
};

/** @type {import('houdini').ConfigFile} */ 
const config = {
    "watchSchema": {
        "url": "https://beta.pokeapi.co/graphql/v1beta",
    },
    "plugins": {
        'houdini-plugin-svelte-global-stores': {},
        "houdini-svelte": {}
    },
    scalars: {
 
 
		uuid: {
			type: 'string',
			...defaultMarshall
		},
		_text: {
			type: 'string',
			...defaultMarshall
		},
		hstore: {
			type: 'object',
			...defaultMarshall
		},
		jsonb: {
			type: 'object',
			...defaultMarshall
		},
		timestamptz: {
			type: 'string',
			...defaultMarshall
		}
	}
}

export default config
