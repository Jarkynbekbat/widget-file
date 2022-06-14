export class ClassUtil {
          /// CammelCase to SnackCase
          public static camelCaseToSnakeCase(camelCase: string): string {
                    return camelCase.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
          }

          /// class name from code 
          public static classNameFromCode(code: string): string {
                    return code.split(' ').at(1) ?? '';
          }
}