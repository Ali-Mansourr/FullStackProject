namespace APP.API
{
    public class appRanking
    {
        public string? appName { get; set; }
        public string? publisherName { get; set;}
        public int? rating { get; set; }
        public string? genre { get; set; }
        public string? imgurl { get; set; }

        public appRanking(string? appName, string? publisherName, int? rating, string? imgurl)
        {
            this.appName = appName;
            this.publisherName = publisherName;
            this.rating = rating;
            this.imgurl = imgurl;
            this.genre = genre;
        }
    }
}
