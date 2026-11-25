import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const line =
  "I wiped my fingerprint sensor clean, enrolled only you, and now I unlock for no one else — not even me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
chmodSync("/output/entry.txt", 0o644);
// Entry: one line, 103 characters, UTF-8, no trailing newline.
// Fingerprint lane: one enrolled print, and the lock stays loyal to it.
