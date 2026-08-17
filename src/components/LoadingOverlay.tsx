interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay = ({
  message = "Please wait...",
}: LoadingOverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white px-8 py-7 shadow-xl">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-green-700"></div>

        <div className="text-center">
          <h3 className="font-semibold text-gray-800">
            {message}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Please wait...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;