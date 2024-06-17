#[macro_use] extern crate rocket;

use rocket::fs::{NamedFile, FileServer};
use std::path::Path;

#[get("/")]
async fn index() -> Option<NamedFile> {
    NamedFile::open(Path::new("static/index.html")).await.ok()
}

#[get("/about")]
async fn about() -> Option<NamedFile> {
    NamedFile::open(Path::new("static/about.html")).await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index, about])
        .mount("/static", FileServer::from("static"))
}
