export function PageNotFound() {
  return (
    <div style={{height:"25em"}} className="w-100 bg-dark pt-sm-5 pt-3 pb-sm-5 pb-5 text-center">
      <h3 className="display-4 text-warning">Page not found!</h3>
      <p className="display-5 text-white">The page you have requested could not be found.</p>
    </div>
  );
}

export function ContentNotFound() {
  return (
    <div className="w-100 pl-3 pr-3 pt-3 pb-3">
      <p className="lead">Sorry, looks like there's no content to load...</p>
    </div>
  );
}