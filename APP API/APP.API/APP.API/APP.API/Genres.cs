namespace APP.API
{
    public class Genres
    {

        public string? name { get; set; }
        public string? genre_id { get; set; }
        public string? imgurl { get; set; }
        public Genres(string? name, string? genre_id, string? imgurl)
        {
            this.name = name;
            this.genre_id = genre_id;
            this.imgurl = imgurl;
        }

    }
}
