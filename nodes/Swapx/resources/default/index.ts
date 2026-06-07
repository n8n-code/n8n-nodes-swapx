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
					"name": "Mint Proof Api V 1 Proof Mint Address Get",
					"value": "Mint Proof Api V 1 Proof Mint Address Get",
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
					"name": "Airdrop Proof Api V 1 Proof Airdrop Address Get",
					"value": "Airdrop Proof Api V 1 Proof Airdrop Address Get",
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
					"name": "Partners Proof Api V 1 Proof Partners Address Get",
					"value": "Partners Proof Api V 1 Proof Partners Address Get",
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
					"name": "Partners Proof Api V 1 Proof Frax Address Get",
					"value": "Partners Proof Api V 1 Proof Frax Address Get",
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
					"name": "Partners Proof Api V 1 Proof Beets Address Get",
					"value": "Partners Proof Api V 1 Proof Beets Address Get",
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
					"name": "Founders Proof Api V 1 Proof Founders Address Get",
					"value": "Founders Proof Api V 1 Proof Founders Address Get",
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
					"name": "Token Metadata Api V 1 Metadata Token Id Get",
					"value": "Token Metadata Api V 1 Metadata Token Id Get",
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
						"Mint Proof Api V 1 Proof Mint Address Get"
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
						"Mint Proof Api V 1 Proof Mint Address Get"
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
						"Airdrop Proof Api V 1 Proof Airdrop Address Get"
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
						"Airdrop Proof Api V 1 Proof Airdrop Address Get"
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
						"Partners Proof Api V 1 Proof Partners Address Get"
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
						"Partners Proof Api V 1 Proof Partners Address Get"
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
						"Partners Proof Api V 1 Proof Frax Address Get"
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
						"Partners Proof Api V 1 Proof Frax Address Get"
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
						"Partners Proof Api V 1 Proof Beets Address Get"
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
						"Partners Proof Api V 1 Proof Beets Address Get"
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
						"Founders Proof Api V 1 Proof Founders Address Get"
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
						"Founders Proof Api V 1 Proof Founders Address Get"
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
						"Token Metadata Api V 1 Metadata Token Id Get"
					]
				}
			}
		},
		{
			"displayName": "Token Id",
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
						"Token Metadata Api V 1 Metadata Token Id Get"
					]
				}
			}
		},
];
