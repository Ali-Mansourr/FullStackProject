namespace APP.API
{
    public class appDetails
    {
        public string? appName {  get; set; }
        public string? publisherName { get; set; }
        public string? genre { get; set; }
        public string? description { get; set; }
        public string? imgurl { get; set; }
        public string? gallery { get; set; }
        public int? rating { get; set; }

        public appDetails (string? appName, string? publisherName, string? genres, string? description, string? mainimg, string? gallery, int? rating)
        {
            this.appName = appName;
            this.publisherName = publisherName;
            this.genre = genres;
            this.description = description;
            this.imgurl = mainimg;
            this.gallery = gallery;
            this.rating = rating;
        }
    }
}
