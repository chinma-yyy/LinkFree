const ProgressBar = ({ progress }) => {
  return (
    <div class="w-full bg-primary-low rounded-full h-2.5">
      <div
        class="bg-secondary-high h-2.5 my-4 rounded-full"
        style={{ width: `${progress.percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
