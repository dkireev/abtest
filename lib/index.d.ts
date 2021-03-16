declare type Props = {
    variant?: 'variant1' | 'variant2';
};
declare const useAbTest: (testName: string) => Props;
export default useAbTest;
