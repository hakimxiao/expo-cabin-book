import { styled } from "nativewind";
import { Switch, type SwitchProps } from "react-native";

// Adapter untuk mempertahankan tipe props Switch
// tanpa memberikan komponen Switch langsung ke styled().
function SwitchBase(props: SwitchProps) {
  return <Switch {...props} />;
}

// The native Switch, with its "on" track taken from the primary token.
const StyledSwitch = styled(SwitchBase, {
  className: {
    target: false,
    nativeStyleMapping: {
      color: "trackColor.true",
    },
  },
});

export function Toggle(props: Omit<SwitchProps, "trackColor">) {
  return <StyledSwitch className="text-primary" {...props} />;
}
