export const ResourceControlTypeString = Object.freeze({
  CONFIG: 'config',
  CONTAINER: 'container',
  NETWORK: 'network',
  SECRET: 'secret',
  SERVICE: 'service',
  STACK: 'stack',
  VOLUME: 'volume',
});

/**
 * ResourceType int defined in portainer.go as ResourceControlType
 */
export const ResourceControlTypeInt = Object.freeze({
  CONTAINER: 1,
  SERVICE: 2,
  VOLUME: 3,
  NETWORK: 4,
  SECRET: 5,
  STACK: 6,
  CONFIG: 7,
});
