export class Quote {
    public showDescription: boolean;
    constructor(public Author: string,
                public Quote: string,
                public Submitter: string,
                public upvote:number,
                public downvote:number,
                public completeDate: Date){
this.showDescription=false;
    }
  }