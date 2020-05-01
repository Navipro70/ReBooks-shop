import {Book} from "./Object-from-API-imitation";
import {TBook} from "../redux/books-reducer";

export const books: Array<TBook> = [
    new Book("11/22/63", 1, 'https://images-na.ssl-images-amazon.com/images/I/81ks1SmtDnL.jpg',
        'Stephen King', 14.99, 'USD', `11/22/63 is a novel by Stephen King about 
        a time traveler who attempts to prevent the assassination of United States President John F. Kennedy, which 
        occurred on November 22, 1963 (the novel's titular date). It is the 60th book published by Stephen King, his
        49th novel and the 42nd under his own name. The novel was announced on King's official site on March 2, 2011.
        A short excerpt was released online on June 1, 2011, and another excerpt was published in the October 28,
        2011, issue of Entertainment Weekly. The novel was published on November 8, 2011 and quickly became a
        number-one bestseller. It stayed on The New York Times Best Seller list for 16 weeks. 11/22/63 won the 
        2011 Los Angeles Times Book Prize for Best Mystery/Thriller and the 2012 International Thriller Writers Award 
        for Best Novel, and was nominated for the 2012 British Fantasy Award for Best Novel and the 2012 
        Locus Award for Best Science Fiction Novel. The novel required considerable research to accurately portray
        the late 1950s and early 1960s. King commented on the amount of research it required, saying "I've never
        tried to write anything like this before. It was really strange at first, like breaking in a new pair of shoes."`),

    new Book("Carrie", 2, 'https://images-na.ssl-images-amazon.com/images/I/91P7rIp-ayL.jpg',
        'Stephen King', 12.99, 'USD', `Carrie is an epistolary horror novel by American 
        author Stephen King. It was his first published novel, released on April 5, 1974, with a first print-run of 30,000 
        copies. Set primarily in the future year of 1979, it revolves around the eponymous Carrie White, an unpopular
        friendless misfit and bullied high-school girl from an abusive religious household who uses her newly discovered
        telekinetic powers to exact revenge on those who torment her. During the process, she causes one of the worst
        local disasters the town has ever had. King has commented that he finds the work to be "raw" and "with a surprising
        power to hurt and horrify." It is one of the most frequently banned books in United States schools. Much
        of the book uses newspaper clippings, magazine articles, letters, and excerpts from books to tell how Carrie
        destroyed the fictional town of Chamberlain, Maine while exacting revenge on her sadistic classmates and 
        her own mother Margaret.Several adaptations of Carrie have been released, including a 1976 feature film,
        a 1988 Broadway musical as well as a 2012 off-Broadway revival, a 1999 feature film sequel, a 2002 
        television film, a 2013 feature film and a 2018 television special episode of Riverdale. The book 
        is dedicated to King's wife Tabitha King: "This is for Tabby, who got me into it – and then bailed me out of it."`),

    new Book("Misery", 3, 'https://images-na.ssl-images-amazon.com/images/I/81VvBLFev9L.jpg',
        'Stephen King', 13.99, 'USD', `Misery is an American psychological
        horror thriller novel written by Stephen King and first published by Viking Press on June 8, 1987.
        The novel's narrative is based on the relationship of its two main characters – the popular writer Paul
        Sheldon and his psychotic fan Annie Wilkes. When Paul is seriously injured following a car accident,
        former nurse Annie brings him to her home, where Paul receives treatment and doses of pain medication.
        Gradually, Paul realizes that he is a prisoner and is forced to indulge his captor's whims.The novel's 
        title carries separate meanings; it is the name carried by the central heroine of Paul's book series,
        and King described such a state of emotion during the novel's writing. King has outlined the creation 
        of Misery in his memoirs, and mentioned that the image of Annie Wilkes came to him in a dream. King planned 
        the book to be released under the pseudonym Richard Bachman but his identity was discovered before
        the book's release. Misery won the first Bram Stoker Award for Novel in 1987 and was nominated for
        the 1988 World Fantasy Award for Best Novel.[3] Critical reception of Misery was positive. Reviewers 
        praised King for avoiding the fantasy elements of his past works, and noted the novel's parallels with 
        King's personal life and the successful study of the relationship between celebrities and their fans. 
        The novel, which took fourth place in the 1987 bestseller list, was adapted into a film directed by Rob 
        Reiner in 1990, and into a theatrical production starring Laurie Metcalf and Bruce Willis in 2015.`),

    new Book("It", 4, 'https://images-na.ssl-images-amazon.com/images/I/71lZgzNE2kL.jpg',
        'Stephen King', 34.99, 'USD', `It is a 1986 horror novel by American
        author Stephen King. It was his 22nd book, and his 17th novel written under his own name. The story follows 
        the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its
        victims to disguise itself while hunting its prey. "It" primarily appears in the form of Pennywise the Dancing
        Clown to attract its preferred prey of young children.The novel is told through narratives alternating between
        two periods and is largely told in the third-person omniscient mode. It deals with themes that eventually
        became King staples: the power of memory, childhood trauma and its recurrent echoes in adulthood and overcoming 
        evil through mutual trust and sacrifice.King has stated that he first conceived the story in 1978, and began
        writing it in 1981. He finished writing the book in 1985. He also stated that he originally wanted the 
        title character to be a troll like the one in the children's story "Three Billy Goats Gruff", but who inhabited 
        the local sewer system rather than just the area beneath one bridge. He also wanted the story to interweave 
        the stories of children and the adults they later become.The novel won the British Fantasy Award in 1987, and
        received nominations for the Locus and World Fantasy Awards that same year. Publishers Weekly listed It as 
        the best-selling hardcover fiction book in the United States in 1986. It has been adapted into a 1990 two-part
        miniseries directed by Tommy Lee Wallace, a 1998 television series directed by Glen Baretto & Ankush Mohla,
        and into a film duology directed by Andy Muschietti; It was released in September 2017 and It Chapter Two 
        was released in September 2019.`),

    new Book("Green mile", 5, 'https://imgv2-2-f.scribdassets.com/img/word_document/224369072/original/0f9d16897d/1586946200?v=1',
        'Stephen King', 10.99, 'USD', `The Green Mile is a 1996 serial novel by American 
        writer Stephen King. It tells the story of death row supervisor Paul Edgecombe's encounter with John Coffey, an unusual
        inmate who displays inexplicable healing and empathetic abilities. The serial novel was originally released 
        in six volumes before being republished as a single-volume work. The book is an example of magical realism.`),

];