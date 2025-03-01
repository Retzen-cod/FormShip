import os
from pathlib import Path

def print_tree(directory, exclude_file, prefix="", root=True):
    # Get the directory contents
    entries = sorted(os.listdir(directory))
    
    # Count valid entries (excluding the script itself, node_modules, and .expo)
    valid_entries = [e for e in entries if os.path.join(directory, e) != exclude_file 
                    and e != 'node_modules' and e != '.expo']
    entries_count = len(valid_entries)

    for index, entry in enumerate(entries):
        # Skip node_modules and .expo directories
        if entry in ['node_modules', '.expo']:
            continue
            
        # Get the full path
        path = os.path.join(directory, entry)
        
        # Skip if it's the script itself
        if path == exclude_file:
            continue

        # Check if it's the last item in current directory
        is_last = index == len([e for e in entries if e not in ['node_modules', '.expo'] 
                              and os.path.join(directory, e) != exclude_file]) - 1

        # Create the appropriate prefix for current item
        if root:
            current_prefix = "└── " if is_last else "├── "
        else:
            current_prefix = prefix + ("└── " if is_last else "├── ")

        # Print current item
        print(current_prefix + entry)

        # If it's a directory, recurse into it
        if os.path.isdir(path):
            next_prefix = prefix + ("    " if is_last else "│   ")
            print_tree(path, exclude_file, next_prefix, False)

if __name__ == "__main__":
    script_path = os.path.abspath(__file__)
    root_dir = os.path.dirname(script_path)
    
    print(f"Directory tree for: {root_dir}")
    print(".")
    print_tree(root_dir, script_path)
