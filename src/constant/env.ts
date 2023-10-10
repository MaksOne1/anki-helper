export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';
export const showLogger = isLocal || process.env.SHOW_LOGGER === '1' || false;
