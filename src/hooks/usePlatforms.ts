import useData from "./useData";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePLaforms = () => useData<Platforms>('/platforms/lists/parents');

export default usePLaforms;
 