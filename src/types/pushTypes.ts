enum ENV {
  PROD = "prod",
  STAGING = "staging",
  DEV = "dev",
}

type ProgressHookType = any;

export interface PushSign {
  env?: ENV;
  progressHook?: (progress: ProgressHookType) => void;
  account?: string;
  version?: string;
  versionMeta?: {
    NFTPGP_V1?: {
      password: string;
    };
  };
  autoUpgrade?: boolean;
  origin?: string;
}
