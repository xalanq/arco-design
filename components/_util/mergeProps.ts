export default function mergeProps<PropsType>(
  componentProps: PropsType,
  defaultProps: Partial<PropsType>,
  globalComponentConfig: PropsType
): PropsType {
  const props = { ...defaultProps, ...globalComponentConfig };
  Object.entries(componentProps).forEach(([propName, propValue]) => {
    if (propValue !== undefined) {
      props[propName] = propValue;
    }
  });
  return props;
}
