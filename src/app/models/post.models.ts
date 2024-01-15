
export class Post {
    _id!: number;
    titre! : string | undefined;
    contenu! : string | undefined;
  
    // constructor(id: number , titre: string, contenu: string) {
    //   this._id= id;
    //   this.titre = titre;
    //   this.contenu = contenu;
    // }
  
    constructor(titre: string, contenu: string) {
      this.titre = titre;
      this.contenu = contenu;
    }
  
}

