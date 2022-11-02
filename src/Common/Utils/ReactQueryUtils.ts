import {EReactQueryStatus} from '../Enums';
import {TQueryStatus} from '../Types';

/**
 * Проверяет, находятся ли данные react-query в состоянии загрузки
 */
export const isLoading = (data: TQueryStatus[]): boolean => data.some((item) => item === EReactQueryStatus.LOADING);

/**
 * Проверяет, находятся ли данные react-query в состоянии загрузки
 */
export const isSuccess = (data: TQueryStatus[]): boolean => data.every((item) => item === EReactQueryStatus.SUCCESS);

/**
 * Проверяет, находятся ли данные react-query в состоянии загрузки
 */
export const isError = (data: TQueryStatus[]): boolean => data.some((item) => item === EReactQueryStatus.ERROR);
