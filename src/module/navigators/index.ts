import { RootStackParamList } from '../navigation/types';
import { AppNavigation } from './types';

export class Navigator {
  static popToTop() {
    AppNavigation.popToPop();
  }

  static pop() {
    AppNavigation.pop();
  }

  static isFocused() {
    AppNavigation.isFocused();
  }

  static goBack() {
    AppNavigation.goBack();
  }

  static navigate(screen: keyof RootStackParamList, params?: any) {
    AppNavigation.navigate(screen, params);
  }

  static replace(screen: keyof RootStackParamList, params: any): void {
    AppNavigation.getRootState();
    AppNavigation.replace(screen, params);
  }
}
