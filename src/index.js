/**
 * patpos-default-client
 *
 * @param  {type} scope
 * @return {type}
 */
export default function default_client(scope) {
  return async (req) => {
    return async () => {
      let method = scope.find(req);

      if (typeof method == "function") {
        return await method(req);
      }

      return;
    };
  };
}
