import { renderHook, act } from "@testing-library/react-hooks";
import useHomeLayoutController from "../home-layout-view-controller";

test("Something to test", () => {
  const { result } = renderHook(() => useHomeLayoutController({}));

});
