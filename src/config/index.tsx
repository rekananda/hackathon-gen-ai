interface ConfigType {
  env: any;
}

const CONFIG:ConfigType = {
  env: "local",//process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV,
};

export default CONFIG;
