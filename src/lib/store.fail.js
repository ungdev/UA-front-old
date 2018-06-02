export default (opts) => {
  if (opts.mutationSuccess) {
    opts.dispatch(opts.success, false)
  }

  if (opts.mutationError) {
    opts.dispatch(opts.error, opts.err)
  }

  setTimeout(() => {
    if (opts.mutationError) {
      opts.dispatch(opts.error, null)
    }
  }, 2000);

  return Promise.reject(opts.err);
}
