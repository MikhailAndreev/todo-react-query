import {EReactQueryStatus} from './Enums';

export type TQueryStatus = {
	[k in keyof EReactQueryStatus]: EReactQueryStatus[k];
};
