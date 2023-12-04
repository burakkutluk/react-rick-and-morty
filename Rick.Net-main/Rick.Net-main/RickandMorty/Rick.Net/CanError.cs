using Newtonsoft.Json;

namespace Rick
{
    public abstract class CanError
    {
        internal CanError() { }
        [JsonProperty("error")]
        public string ErrorMessage { get; set; } = "";
        public bool DidError => ErrorMessage != string.Empty;
    }
}
