import Trie from "@code/Trie";

test("Trie", function() {
    const trie = new Trie();
    trie.insert("foo");
    trie.insert("fool");
    trie.insert("foolish");
    trie.insert("bar");
    trie.insert("bart");
    trie.insert("barn");
    trie.insert("barrista");

    expect(trie.find("fo").sort()).toEqual([
        "foo",
        "fool",
        "foolish",
    ]);

    trie.delete("fool");
    trie.delete("bart");

    expect(trie.find("fo").sort()).toEqual([
        "foo",
        "foolish",
    ]);

    expect(trie.find("b").sort()).toEqual([
        "bar",
        "barn",
        "barrista",
    ]);
});

