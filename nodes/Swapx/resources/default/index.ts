import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Mint Proof API v1 Proof Mint Address Get",
					"value": "Mint Proof API v1 Proof Mint Address Get",
					"action": "Mint Proof",
					"description": "Mint Proof",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/proof/mint/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Airdrop Proof API v1 Proof Airdrop Address Get",
					"value": "Airdrop Proof API v1 Proof Airdrop Address Get",
					"action": "Airdrop Proof",
					"description": "Airdrop Proof",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/proof/airdrop/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Partners Proof API v1 Proof Partners Address Get",
					"value": "Partners Proof API v1 Proof Partners Address Get",
					"action": "Partners Proof",
					"description": "Partners Proof",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/proof/partners/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Partners Proof API v1 Proof Frax Address Get",
					"value": "Partners Proof API v1 Proof Frax Address Get",
					"action": "Partners Proof",
					"description": "Partners Proof",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/proof/frax/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Partners Proof API v1 Proof Beets Address Get",
					"value": "Partners Proof API v1 Proof Beets Address Get",
					"action": "Partners Proof",
					"description": "Partners Proof",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/proof/beets/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Founders Proof API v1 Proof Founders Address Get",
					"value": "Founders Proof API v1 Proof Founders Address Get",
					"action": "Founders Proof",
					"description": "Founders Proof",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/proof/founders/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Token Metadata API v1 Metadata Token ID Get",
					"value": "Token Metadata API v1 Metadata Token ID Get",
					"action": "Token Metadata",
					"description": "Token Metadata",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/metadata/{{$parameter[\"token_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/proof/mint/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Mint Proof API v1 Proof Mint Address Get"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Mint Proof API v1 Proof Mint Address Get"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/proof/airdrop/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Airdrop Proof API v1 Proof Airdrop Address Get"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Airdrop Proof API v1 Proof Airdrop Address Get"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/proof/partners/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Partners Proof API v1 Proof Partners Address Get"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Partners Proof API v1 Proof Partners Address Get"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/proof/frax/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Partners Proof API v1 Proof Frax Address Get"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Partners Proof API v1 Proof Frax Address Get"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/proof/beets/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Partners Proof API v1 Proof Beets Address Get"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Partners Proof API v1 Proof Beets Address Get"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/proof/founders/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Founders Proof API v1 Proof Founders Address Get"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Founders Proof API v1 Proof Founders Address Get"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/metadata/{token_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Token Metadata API v1 Metadata Token ID Get"
					]
				}
			}
		},
		{
			"displayName": "Token ID",
			"name": "token_id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Token Metadata API v1 Metadata Token ID Get"
					]
				}
			}
		},
];
