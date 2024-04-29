<?php

namespace App\Console\Commands;

use App\Models\Posts;
use App\Models\ScheduledPosts;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;

class TransferData extends Command
{
    protected $signature = 'data:transfer';
    protected $description = 'Transfer data from source table to destination table';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        // Retrieve data from source table
        $data = ScheduledPosts::all();

        // Get the columns of the destination table
        $columns = Schema::getColumnListing((new Posts())->getTable());

        // Insert data into destination table
        foreach ($data as $item) {
            $newItem = new Posts();
            
            // Assign values for each column dynamically
            foreach ($columns as $column) {
                // Check if the column exists in the source model
                if (isset($item->{$column})) {
                    $newItem->{$column} = $item->{$column};
                }
            }
            
            $newItem->save();
        }

        $this->info('Data transfer completed successfully!');
    }
}