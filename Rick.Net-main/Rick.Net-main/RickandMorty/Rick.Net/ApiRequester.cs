using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Rick
{
    internal static class ApiRequester
    {
        
        public static async Task<HttpResponseMessage> RequestAPIAsync(string absoluteURL, RequestType req)
        {
            if (string.IsNullOrEmpty(absoluteURL))
                return null;
            else
            {
                if (!Uri.IsWellFormedUriString(absoluteURL, UriKind.Absolute))
                    return null;
            }

            using HttpClient client = new();

            return req switch
            {
                RequestType.Get => await client.GetAsync(absoluteURL),
                RequestType.Post => await client.PostAsync(absoluteURL, null),
                RequestType.Put => await client.PutAsync(absoluteURL, null),
                RequestType.Delete => await client.DeleteAsync(absoluteURL),
                _ => default,
            };
            
            
        }

        public static HttpResponseMessage RequestAPI(string absoluteURL, RequestType req) => RequestAPIAsync(absoluteURL, req).GetAwaiter().GetResult();

        public enum RequestType
        {
            Get,Post,Put,Delete
        }
    }
}
